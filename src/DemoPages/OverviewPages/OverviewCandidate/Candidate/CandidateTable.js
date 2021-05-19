import React, { Fragment } from "react";
import CSSTransitionGroup from "react-transition-group/CSSTransitionGroup";
import ReactTable from "react-table";
import {
  Col,
  Card,
  CardBody,
  Button,
  Container,
  Row,
  CardHeader,
} from "reactstrap";
import { faListUl, faFileExcel } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { connect } from "react-redux";
import { candidateActions } from "../../../../redux/actions";
import propTypes from "prop-types";
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";
import { matchSorter } from "match-sorter";
const CardsAdvanced = ({ dataGrid, onAdd, remove}) => {
  const fileType =
    "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";

  const exportToCSV = (dataGrid) => {
    const ws = XLSX.utils.json_to_sheet(dataGrid);
    const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
    const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
    const data = new Blob([excelBuffer], { type: fileType });
    FileSaver.saveAs(data, "Candidate.xlsx");
  };

  const setToogle = (value) => {
    onAdd(value);
  };

  const detail = (value) => {
    const dataItem = {
      dataItemTab: { ...value },
      inTab: true,
      inEdit: false,
    };
    onAdd(dataItem);
  };

  const removeData = (value) => {
    remove(value.id);
  };

  return (
    <Fragment>
      <CSSTransitionGroup
        component="div"
        transitionName="TabsAnimation"
        transitionAppear={true}
        transitionAppearTimeout={0}
        transitionEnter={false}
        transitionLeave={false}
      >
        <Container fluid>
          <Row>
            <Col md="12">
              <Card className="main-card mb-3">
                <CardHeader>
                  <h5>Redux Example Table</h5>
                </CardHeader>
                <CardBody>
                  <Row className="mb-3">
                    <Col lg="3" md="3" sm="6"></Col>
                    <Col sm="9">
                      <Button
                        className="btn-md btn-shadow btn-shine float-right ml-3"
                        onClick={() => setToogle({ inAdd: true })}
                      >
                        <FontAwesomeIcon icon={faListUl} />
                        <span> Add</span>
                      </Button>
                      <Button
                        className="btn btn-success float-right"
                        onClick={() => exportToCSV(dataGrid)}
                      >
                        <FontAwesomeIcon icon={faFileExcel} className="mr-2" />
                        <span>Download</span>
                      </Button>
                    </Col>
                  </Row>
                  <ReactTable
                    resizable
                    data={dataGrid}
                    filterable
                    defaultFilterMethod={(filter, row) =>
                      String(row[filter.id]) === filter.value
                    }
                    columns={[
                      {
                        columns: [
                          {
                            Header: "Name",
                            id: "nama",
                            accessor: (d) => d.nama,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["nama"],
                              }),
                            filterAll: true,
                          },
                          {
                            Header: "E-mail",
                            id: "email",
                            accessor: (d) => d.email,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["email"],
                              }),
                            filterAll: true,
                          },
                          {
                            Header: "No Hp",
                            id: "noHp",
                            accessor: (d) => d.noHp,
                            filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, {
                                keys: ["noHp"],
                              }),
                            filterAll: true,
                          },
                          {
                            Header: "Actions",
                            accessor: "actions",
                            sortable: false,
                            filterable: false,
                            Cell: (row) => (
                              <div className="d-block w-100 text-center">
                                <Button
                                  className="mb-2 mr-2 btn-pill"
                                  color="warning"
                                  onClick={() => detail(row.original)}
                                >
                                  Detail
                                </Button>
                                <Button
                                  className="mb-2 mr-2 btn-pill"
                                  color="danger"
                                  onClick={() => removeData(row.original)}
                                >
                                  Delete
                                </Button>
                              </div>
                            ),
                          },
                        ],
                      },
                    ]}
                    defaultPageSize={5}
                    className="-striped -highlight"
                    // headerClassName= "wordwrap"
                    // style= { {'whiteSpace': 'unset'} }
                  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </CSSTransitionGroup>
      <br />
      <br />
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  ...state.candidateReducer,
});
const mapDisppatchToProps = {
  getClient: candidateActions.getData,
  onAdd: candidateActions.onAdd,
  remove: candidateActions.remove,
  getClientByStatus: candidateActions.getDataStatus,
};

CardsAdvanced.propTypes = {
  dataGrid: propTypes.array,
  onAdd: propTypes.func,
  remove: propTypes.func,
  getClientByStatus: propTypes.func,
  getDetail: propTypes.func,
  onHistoryMode: propTypes.func,
  dataStates: propTypes.object,
  loading: propTypes.bool,
};
export default connect(mapStateToProps, mapDisppatchToProps)(CardsAdvanced);
