import React from "react"
import Header from "../../components/Header"
import { shallow } from 'enzyme';
// import toJSON from "enzyme-to-json"

// import ReactShallowRendeder from "react-test-renderer/shallow"
// test("render Header correctly",()=>{
//     const renderer = new ReactShallowRendeder();
//     renderer.render(<Header/>)
//         expect(renderer.getRenderOutput()).toMatchSnapshot();
// })

test("test to render Header correctly",()=>{
    const wrapper = shallow(<Header/>);
    expect(wrapper).toMatchSnapshot()
    // expect(wrapper.find("h1").length).toBe(1)
    // expect(toJSON(wrapper)).toMatchSnapshot()

})