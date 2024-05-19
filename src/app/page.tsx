'use client'

import { Main } from "./page.styles";
import Header from "./components/header";
import Footer from "./components/footer";
import Products from "./components/products";
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

export default function Home() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main>
        <Header/>
        <Products/>
        <Footer/>
      </Main>
    </QueryClientProvider>
  );
}
