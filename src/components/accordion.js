import { Fragment, useState } from 'react';

const Accordion = ({items}) => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleActiveIndex = (index) => {
    setActiveIndex(index);
  }
  
  return items.map((item, index) => {
    const active = index === activeIndex ? 'active' : '';
    return (
      <Fragment key={item.title}>
        <div 
          className={`title ${active ? 'active' : ''}`}
          onClick={() => handleActiveIndex(index)}
        >
          <i className='dropdown icon' />
          {item.title}
        </div>
        <p className={`content ${active ? 'active' : ''}`}>{item.content}</p>
      </Fragment>
    )}
  )
} 

export default Accordion;