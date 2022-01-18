// react
import { ChangeEvent, FC, useState } from 'react';

// next
import { useRouter } from 'next/router';

// material ui
import { Pagination as MuiPagination } from '@mui/material';
import { Box } from '@mui/system';

// types
interface PaginationProps {
  itemsToShow: number;
}

export const Pagination: FC<PaginationProps> = ({ itemsToShow }) => {
  // hooks
  const { push, query } = useRouter();

  // local state
  const [currentPage, setCurrentPage] = useState<number>(query?.page ? Number(query?.page) : 1);

  const handleChange = (_: ChangeEvent<unknown>, page: number) => {
    console.log(page);
    push({ query: `page=${page}` });
    setCurrentPage(page);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: '3rem 1rem',
      }}
    >
      <MuiPagination
        count={itemsToShow}
        page={currentPage}
        defaultPage={1}
        size="large"
        onChange={handleChange}
      />
    </Box>
  );
};
