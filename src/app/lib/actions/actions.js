'use server';
import { put } from '@vercel/blob';
import { revalidatePath } from 'next/cache';
import dbConnect from '../connect-db/connect-db';
import Blog from '../models/models';
import { redirect } from 'next/navigation';
export const createNewPost = async (values) => {
  try {
    const data = {
      ...JSON.parse(values),
      published: true,
      content: JSON.stringify(values?.content),
    };

    const post = await Blog.create(data);
  } catch (err) {}
  revalidatePath('/posts');
  redirect('/dashboard/posts');
};
export const uploadFile = async (formData) => {
  await dbConnect();
  const imageFile = formData.get('file');

  const { url } = await put(imageFile.name, imageFile, {
    access: 'public',
  });
  return {
    image: url,
  };
};
