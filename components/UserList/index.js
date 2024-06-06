import React, { Component } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const Table = styled.table(() => ({
  width: '100%',
  borderCollapse: 'collapse',

  th: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
    backgroundColor: '#f2f2f2',
    cursor: 'pointer',
  },

  td: {
    border: '1px solid #ddd',
    padding: '8px',
    textAlign: 'left',
  },

  '.sort-icon': {
    verticalAlign: 'middle',
    marginLeft: '5px',
  },
}));

const columnFields = [
  { value: 'id', label: 'Id' },
  { value: 'name', label: 'Name', enableSearch: true },
  { value: 'email', label: 'Email', enableSearch: true },
  { value: 'username', label: 'Username' },
  { value: 'phone', label: 'Phone' },
  { value: 'website', label: 'Website' },
];

const withUserData = WrappedComponent =>
  class WithUserData extends Component {
    state = {
      users: [],
      filteredUsers: [],
      searchName: '',
      searchEmail: '',
      sortColumn: columnFields[0].value,
      sortDirection: 'asc',
    };

    async componentDidMount() {
      const { data: users } = await axios.get('/api/v1/users/all');

      this.setState({
        users,
        filteredUsers: users,
      });
    }

    componentDidUpdate(prevProps, prevState) {
      if (
        prevState.searchName !== this.state.searchName ||
        prevState.searchEmail !== this.state.searchEmail ||
        prevState.users !== this.state.users ||
        prevState.sortColumn !== this.state.sortColumn ||
        prevState.sortDirection !== this.state.sortDirection
      ) {
        let filteredUsers = this.state.users.filter(
          user =>
            user.name
              .toLowerCase()
              .includes(this.state.searchName.toLowerCase()) &&
            user.email
              .toLowerCase()
              .includes(this.state.searchEmail.toLowerCase()),
        );

        if (this.state.sortColumn) {
          filteredUsers.sort((a, b) => {
            const x = a[this.state.sortColumn];
            const y = b[this.state.sortColumn];
            if (x < y) return this.state.sortDirection === 'asc' ? -1 : 1;
            if (x > y) return this.state.sortDirection === 'asc' ? 1 : -1;
            return 0;
          });
        }

        this.setState({ filteredUsers });
      }
    }

    handleOnSearch = event => {
      let { name, value } = event.target;

      if (name === 'name') {
        name = 'searchName';
      } else if (name === 'email') {
        name = 'searchEmail';
      } else {
        throw new Error('Unknown search element');
      }

      this.setState({ [name]: value });
    };

    handleSort = column => {
      if (this.state.sortColumn === column) {
        this.setState(prevState => ({
          sortDirection: prevState.sortDirection === 'asc' ? 'desc' : 'asc',
        }));
      } else {
        this.setState({ sortColumn: column, sortDirection: 'asc' });
      }
    };

    render() {
      return (
        <WrappedComponent
          users={this.state.filteredUsers}
          columnFields={columnFields}
          handleOnSearch={this.handleOnSearch}
          handleSort={this.handleSort}
          sortColumn={this.state.sortColumn}
          sortDirection={this.state.sortDirection}
        />
      );
    }
  };

class UserList extends Component {
  render() {
    const {
      users,
      columnFields,
      handleOnSearch,
      handleSort,
      sortColumn,
      sortDirection,
    } = this.props;
    return (
      <div>
        <Table>
          <thead>
            <tr>
              {columnFields.map(field => {
                return (
                  <th key={field.value}>
                    <div
                      onClick={() => handleSort(field.value)}
                      style={{ paddingBottom: 8 }}
                    >
                      {field.label}
                      {sortColumn === field.value &&
                        (sortDirection === 'asc' ? (
                          <span className={'sort-icon'}>▲</span>
                        ) : (
                          <span className={'sort-icon'}>▼</span>
                        ))}
                    </div>

                    {field.enableSearch ? (
                      <input
                        type={'text'}
                        placeholder={`Search by ${field.label}`}
                        name={field.value}
                        onChange={handleOnSearch}
                        style={{ padding: 6, width: 200 }}
                      />
                    ) : null}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.id}>
                {columnFields.map(field => (
                  <td key={field.value}>{user[field.value]}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </Table>
        <div></div>
      </div>
    );
  }
}

export default withUserData(UserList);
