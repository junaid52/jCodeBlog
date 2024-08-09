import { Button, Box, Grid } from '@mui/material';
import { getAllPosts } from '@/app/lib/data/data';
import ThemeTable from '@/components/theme-table/theme-table';
export default async function Page({ searchParams }) {
  const query = {
    page: searchParams.page ?? 1,
    limit: searchParams.limit ?? 5,
  };
  const { posts } = await getAllPosts(query);
  let { data: rows } = posts;
  const {
    metadata: { totalCount, page, limit },
  } = posts;
  rows = rows.map((element) => {
    const data = JSON.parse(JSON.stringify(element));
    return {
      ...data,
      id: data._id,
    };
  });

  return (
    <ThemeTable rows={rows} totalCount={totalCount} page={page} limit={limit} />
  );
}
