import React from "react";
import { connect } from "react-redux";
import {createStructuredSelector} from 'reselect'
import {selectDirectorySections} from '../../redux/directory/directory-selectors'
import MenuItem from "../menu-item/menu-item-component";
import "./directory-styles.scss";

    //other section props is being used in place of title={title}... size={size}
    //only works because each prop matches the state
const Directory = ({sections}) => (
  <div className="directory-menu">
    {sections.map(({ id, ...otherSectionProps }) => (
      <MenuItem key={id} {...otherSectionProps}></MenuItem>))}
  </div>
);

const mapStateToProps = createStructuredSelector({
  sections: selectDirectorySections


})

export default connect(mapStateToProps)(Directory);
