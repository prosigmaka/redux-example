import React from 'react';
import {
    Modal, ModalBody, ModalHeader,
    // CardBody, CardHeader, NavItem, NavLink, Nav, TabContent, TabPane
} from 'reactstrap';
// import classnames from 'classnames';

import TabProfile from './Tab/Profile/TabProfile';



const DetailModal = (props) => {
    // const [activeTab, setActiveTab] = useState('1');
    // const toggle = (tab) => {
    //     if (activeTab !== tab) {
    //         setActiveTab(tab)
    //     }
    // }

    const response = (value) => {
        props.data(true);
    }

    const closeBtn = <button className="close" onClick={props.toggle}>&times;</button>;


    return (
        <Modal isOpen={props.isOpen} toggle={props.toggle}>
            <ModalHeader toggle={props.toggle} close={closeBtn} >
                Form Detail
            </ModalHeader>
            <ModalBody tabs="true" className="mb-3">
                <TabProfile idcandidate={props.idcandidate} profdata={(x) => response(x)} />
            </ModalBody>
        </Modal>
    );
}



export default DetailModal;