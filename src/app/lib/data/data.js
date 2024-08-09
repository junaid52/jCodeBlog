'use server';
import dbConnect from '../connect-db/connect-db';
import Blog from '../models/models';

export const getAllPosts = async (query) => {
  try {
    await dbConnect();
    let { page, limit } = query;
    page = parseInt(page, 10) || 1;
    limit = parseInt(limit, 10) || 50;
    const posts = await Blog.aggregate([
      {
        $facet: {
          metadata: [{ $count: 'totalCount' }],
          data: [{ $skip: (page - 1) * limit }, { $limit: limit }],
        },
      },
    ]);

    return {
      posts: {
        metadata: {
          totalCount: posts[0].metadata[0]?.totalCount ?? 0,
          page,
          limit,
        },
        data: posts[0].data,
      },
    };
  } catch (err) {
    throw new Error(err.message);
  }
};
