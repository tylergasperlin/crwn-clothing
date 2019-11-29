import React from 'react'
import MenuItem from '../menu-item/menu-item-component'
import './directory-styles.scss'

class Directory extends React.Component{
    constructor(){
        super()

        this.state = {
            sections: [
            {
              title: 'hats',
              imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
              id: 1,
              linkUrl: 'shop',

            },
            {
              title: 'jackets',
              imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
              id: 2,
              linkUrl: 'shop'
            },
            {
              title: 'sneakers',
              imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
              id: 3,
              linkUrl: 'shop'
            },
            {
              title: 'womens',
              imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
              size: 'large',
              id: 4,
              linkUrl: 'shop'
              
            },
            {
              title: 'mens',
              imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
              size: 'large',
              id: 5,
              linkUrl: 'shop'
            }
        
          ]
        
              
        }
    }
    
        render(){
            return(
                <div className='directory-menu'>
                    {
                      //other section props is being used in place of title={title}... size={size}
                      //only works because each prop matches the state
                        this.state.sections.map(({id, ...otherSectionProps}) => 
                            <MenuItem key={id} {...otherSectionProps}></MenuItem>)
                    }

                </div>
            )
        }
    }

export default Directory;