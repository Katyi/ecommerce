import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Footer from "../components/Footer";

const Container = styled.div``

const Wrapper = styled.div``

const Title = styled.h1``

const Top = styled.div``

const Bottom = styled.div``

const Cart = () => {
  return (
    <Container>
      <Navbar/>
      <Announcement />
      <Wrapper>
        <Title>YOUR BAG</Title>
        <Top></Top>
        <Bottom></Bottom>
      </Wrapper>
      <Footer/>
    </Container>
  )
}

export default Cart
