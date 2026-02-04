import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Features from "@/components/home/Features";
import About from "@/components/home/About";
import Newsletter from "@/components/home/Newsletter";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <FeaturedProducts />
      <About />
      <Newsletter />
    </Layout>
  );
};

export default Index;
