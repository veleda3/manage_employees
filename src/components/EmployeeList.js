import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView } from 'react-native';
import _ from 'lodash';
import { employeeFetch } from '../components/actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.createDataSource(this.props);
  }
  componentWillReceiveProps(nextProps) {
    // nextProps are the next set of props that this component will be render with
    this.createDataSource(nextProps);
  }

  createDataSource({ Employees }) {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });

    this.dataSource = ds.cloneWithRows(Employees);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }
  render() {
    console.log(this.props);
    return (
        <ListView
          enableEmptySection
          dataSource={this.dataSource}
          renderRow={this.renderRow}
        />


    );
  }
}

const mapStateToProps = state => {
  // this will return something as { shift: 'monday', name: 'dan', id: 'cdscwdcw33' } using lodash and the map function this will return an array of key value pairs
  const Employees = _.map(state.Employees, (val, uid) => {
    return { ...val, uid };
  });
  return { Employees };
};

export default connect(mapStateToProps, { employeeFetch })(EmployeeList);
