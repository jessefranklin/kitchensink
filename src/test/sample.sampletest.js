import React from 'react'
import sinon from 'sinon'
import { expect } from 'jest'
import { shallow, mount } from 'enzyme'



describe('Arrows', () => {
    describe('ArrowLeft', () => {
        it('should render <ArrowLeft /> component', () => {
            const onClick = sinon.spy()
            const arrowLeft = mount(<ArrowLeft onClick={onClick} />)
    
            arrowLeft.simulate('click')
            expect(arrowLeft.length).to.equal(1)
            expect(onClick.callCount).to.equal(1)
            // Not work at react element, PR https://github.com/airbnb/enzyme/pull/680
            //expect(arrowLeft.hasClass('foo')).to.equal(true)
        })
    })
  
    describe('ArrowRight', () => {
        it('should render <ArrowRight /> component', () => {
            const onClick = sinon.spy()
            const arrowRight = shallow(<ArrowRight onClick={onClick} />)
    
            arrowRight.simulate('click')
            expect(arrowRight.length).to.equal(1)
            expect(onClick.callCount).to.equal(1)
        })
    })
})




describe('Slides', () => {
    it('should render <Slides /> component', () => {
      const slides = shallow(
        <Slides>
          <div className="slide-1" />
          <div className="slide-2" />
          <div className="slide-3" />
        </Slides>
      )
      const nodes = slides.find('.wrapper').children().getNodes()
      expect(nodes.length).to.equal(5)
      expect(nodes[0].props.className).to.equal('head')
      expect(nodes[1].props.className).to.equal('slide-1')
      expect(nodes[2].props.className).to.equal('slide-2')
      expect(nodes[3].props.className).to.equal('slide-3')
      expect(nodes[4].props.className).to.equal('tail')
    })
  
    it('should slide right when arrowRight be clicked', () => {
      const slides = shallow(
        <Slides arrowRight={ArrowRight}>
          <div className="slide-1" />
          <div className="slide-2" />
          <div className="slide-3" />
        </Slides>
      )
  
      const arrowRight = slides.children().at(0)
      arrowRight.simulate('click')
      expect(slides.state('key')).to.equal(1)
    })
  
    it('should slide left when arrowLeft be clicked', () => {
      const slides = shallow(
        <Slides arrowLeft={ArrowLeft}>
          <div className="slide-1" />
          <div className="slide-2" />
          <div className="slide-3" />
        </Slides>
      )
  
      const arrowLeft = slides.children().at(0)
      arrowLeft.simulate('click')
      expect(slides.state('key')).to.equal(-1)
    })
  
    it('should slide to last one when slide left start from head', () => {
      const slides = shallow(
        <Slides arrowRight={ArrowLeft}>
          <div className="slide-1" />
          <div className="slide-2" />
          <div className="slide-3" />
        </Slides>
      )
  
      const arrowLeft = slides.children().at(0)
      arrowLeft.simulate('click') // at head
      arrowLeft.simulate('click') // at 2
      expect(slides.state('key')).to.equal(2)
    })
  
    it('should slide to last one when slide left start from head', () => {
      const slides = shallow(
        <Slides arrowRight={ArrowRight}>
          <div className="slide-1" />
          <div className="slide-2" />
          <div className="slide-3" />
        </Slides>
      )
  
      const arrowRight = slides.children().at(0)
      arrowRight.simulate('click') // at 1
      arrowRight.simulate('click') // at 2
      arrowRight.simulate('click') // at tail
      arrowRight.simulate('click') // at 0
      expect(slides.state('key')).to.equal(0)
    })
  })