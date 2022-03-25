import { Page404Wrapper } from "./styles"

const Page404 = () => {
  return (<Page404Wrapper>
    <div className='no_found_img'>
      404
    </div>
    <div className='no_found_text'>
      Página no encontrada
    </div>
  </Page404Wrapper>)
}

export default Page404