import React, {Component} from "react";

class ContactList extends Component {
  constructor(props) {
    super(props);

    this.createContact = this.createContact.bind(this);
  }

  delete(key) {
    this.props.delete(key);
  }

  createContact(item) {
    return  <tr key={item.key}>
              <td>{item.firstname}</td>
              <td>{item.lastname}</td>
              <td>{item.phone}</td>
              <td><i className="fas fa-trash-alt" onClick={() => { if (window.confirm('Are you sure you want to delete ' + item.firstname + ' ' + item.lastname + ' from your contacts?')) this.delete(item.key)}}></i></td>
            </tr>
  }

  render() {
    const contactEntries = this.props.entries;
    const listItems = contactEntries.map(this.createContact);
    return (
      contactEntries.length > 0 ?
      <table className="mui-table mui-table--bordered">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {listItems}
        </tbody>
      </table>:<div className="mui--text-center">No contacts available</div>
    );
  }
};

export default ContactList;
