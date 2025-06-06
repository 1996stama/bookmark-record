import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

/**
 * 全てのトピック一覧を取得する
 *
 * @returns トピック一覧（ブックマーク数を含む、更新日時の降順）
 */
export async function GET() {
  try {
    const topics = await prisma.topic.findMany({
      include: {
        _count: {
          select: { bookmarks: true },
        },
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    // レスポンス用にブックマーク数を追加（フロントエンドで使いやすい形式に変換）
    const topicsWithCount = topics.map((topic) => ({
      ...topic,
      bookmarkCount: topic._count.bookmarks,
    }));

    return NextResponse.json(topicsWithCount);
  } catch (error) {
    console.error("Error fetching topics:", error);
    return NextResponse.json(
      { error: "Failed to fetch topics" },
      { status: 500 }
    );
  }
}

/**
 * 新しいトピックを作成する
 *
 * @param request - リクエストオブジェクト（title, description, emojiを含む）
 * @returns 作成されたトピック情報（ブックマーク数を含む）
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { title, description, emoji } = body;

    if (!title) {
      return NextResponse.json({ error: "Title is required" }, { status: 400 });
    }

    const topic = await prisma.topic.create({
      data: {
        title,
        description: description || null,
        emoji: emoji || "📁", // デフォルトの絵文字を設定
      },
      include: {
        _count: {
          select: { bookmarks: true },
        },
      },
    });

    // レスポンス用にブックマーク数を追加
    const topicWithCount = {
      ...topic,
      bookmarkCount: topic._count.bookmarks,
    };

    return NextResponse.json(topicWithCount, { status: 201 });
  } catch (error) {
    console.error("Error creating topic:", error);
    return NextResponse.json(
      { error: "Failed to create topic" },
      { status: 500 }
    );
  }
}
