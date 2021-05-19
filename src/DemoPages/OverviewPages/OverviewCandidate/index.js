import React, { Fragment, useEffect } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import { connect } from 'react-redux'
import PageTitle from '../../../Layout/AppMain/PageTitle';
import { candidateActions } from '../../../redux/actions'
import propTypes from 'prop-types'
import CardsAdvanced from './Candidate/CandidateTable';
import AddModal from './Candidate/FormCandidate/AddModal';
import DetailModal from './Candidate/DetailCandidate/DetailModal';
import ModalTabForm from './Candidate/FormCandidate/FormModal'
const OverviewCandidate = ({ getCandidate, loading,getClientByStatus}) => {
    useEffect(() => {
        if (loading) {
                getCandidate()
                
        }
    }, [loading, getCandidate, getClientByStatus])
    return (
        <Fragment>
            <CSSTransitionGroup
                component="div"
                transitionName="TabsAnimation"
                transitionAppear={true}
                transitionAppearTimeout={0}
                transitionEnter={false}
                transitionLeave={false}>
                <PageTitle
                    heading="Candidate"
                    icon="lnr-users icon-gradient bg-amy-crisp"
                />
                <CardsAdvanced />
                <AddModal />
                <ModalTabForm />
                <DetailModal />

            </CSSTransitionGroup>
        </Fragment>
    );

}

const mapStateToProps = state => ({
    ...state.candidateReducer
})
const mapDisppatchToProps = {
    getCandidate: candidateActions.getData,
    getClientByStatus: candidateActions.getDataStatus,
    // getMedia:candidateActions.getMedia
}
OverviewCandidate.propTypes = {
    dataItem: propTypes.object,
    getData: propTypes.func,
    getClientByStatus: propTypes.func,
    getDetail: propTypes.func,
    onHistoryMode: propTypes.func,
    dataStates: propTypes.object,
    loading: propTypes.bool
}
export default connect(mapStateToProps, mapDisppatchToProps)(OverviewCandidate)