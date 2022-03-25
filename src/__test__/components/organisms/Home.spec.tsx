import { shallow, ShallowWrapper } from 'enzyme'
import Home from '@organisms/Home'
import data from '../../../shared/data.json'

describe('Home Component', () => {
  let wrapper: ShallowWrapper
  beforeEach(() => {
    wrapper = shallow(
      <Home/>
    )
  })

  test('Should render HomeWrapper', () => {
    expect(wrapper.find('styles__HomeWrapper').length).toBe(1)
  })

  test('Should show a listo of characters from json', () => {
    for( let char of data.results ) {

      console.log(char);
      // console.log(wrapper.text().html())
      expect(wrapper.find('li')).toBe(char.name)
    }
  })
})
