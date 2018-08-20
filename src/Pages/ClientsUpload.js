import React from 'react';
import RealmLabels from '../Components/RealmLabels';
import './style.scss';

const data = [
  {
    columnLabel: 'First Name',
    previewData: 'Lynda',
    realmLabel: 'FirstName'
    },
  {
    columnLabel: 'Address 1',
    previewData: '234 Realm Street\n',
    realmLabel: 'Address1'
  },
  {
    columnLabel: 'City',
    previewData: 'Denver',
    realmLabel: 'City'
  },
  {
    columnLabel: 'Postal',
    previewData: '80228',
    realmLabel: 'ZipCode'
  }
  ];

const columns = [{
  Header: () => (<div style={{textAlign:'left'}}>COLUMN LABEL FROM YOUR FILE</div>),
  accessor: 'columnLabel'
}, {
  Header: () => (<div style={{textAlign:'left'}}>PREVIEW</div>),
  accessor: 'previewData'
}, {
  Header: () => (<div style={{textAlign:'left'}}>REALM LABEL</div>),
  accessor: 'realmLabel'
}];


export default class ClientsUpload extends React.Component {

  render() {

    return (

      <div style={{marginTop:10}}>
        <div className="headingText">
          Clients Upload
        </div>
        Please map your fields to the Realm's fields for your Clients
        <div style={{ fontSize: 'smaller', marginTop:20 }}>
          Unmatched fields will be ignored
        </div>

        <table style={{width:'100%',backgroundColor:'white'}}>
          <tr style={{backgroundColor:'#e1e1e1', borderWidth:1, borderColor:'black', margin: 10}}>
            <th style={{width:'30%'}}>COLUMN LABEL FROM YOUR FILE</th>
            <th style={{width:'40%'}}>PREVIEW</th>
            <th style={{width:'30%'}}>REALM LABEL</th>
          </tr>
          {data.map(p => <tr>
            <td>{p.columnLabel}</td>
            <td>{p.previewData}</td>
            <td><RealmLabels value={p.realmLabel}/></td>
          </tr>)}
        </table>
        

      </div>
    );

  }
}
