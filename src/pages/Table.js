import React, { useEffect, useState } from 'react';

import { kaReducer, Table } from '../ka-table';
import { DataType, EditingMode } from '../ka-table/enums';

export const Tables = ({props}) => {

    const [state, setState] = useState()

    const tablePropsInit = {
        columns: [
            { key: 'id', title: 'Id', dataType: DataType.Number },
            { key: 'firstName', title: 'Name', dataType: DataType.String },
            { key: 'lastName', title: 'LastName', dataType: DataType.String },
            { key: 'birthday', title: 'Birth Date', dataType: DataType.Date },
            { key: 'emailConfirmed', title: 'Email comfirm', dataType: DataType.Boolean },
            { key: 'gender', title: 'Gender', dataType: DataType.String },
            { key: 'money', title: 'Money', dataType: DataType.Number },
            { key: 'phoneNumber', title: 'Phone', dataType: DataType.Number },
            { key: 'email', title: 'Email', dataType: DataType.String },
            { key: 'role', title: 'Role', dataType: DataType.String },
            ],
        format: ({ column, value }) => {
          if (column.dataType === DataType.Date){
            return value.toISOString().split('T')[0];
          }
        },
        data: props,
        editingMode: EditingMode.Cell,
        rowKeyField: 'id',
      };
  const [tableProps, changeTableProps] = useState(tablePropsInit);
  const dispatch = (action) => {
    changeTableProps((prevState) => kaReducer(prevState, action));
  };

    useEffect(() => {
        setState(tableProps.data)
    }, [tableProps.data])

    useEffect(() => {
        if (state) {
            console.log(state)
            console.log('state switch')
        }
    }, [state])

    return (

        <div className='users-block'>
            <div className='users-body'>
                <Table
                {...tableProps}
                dispatch={dispatch}
                />
            </div>
        </div>
    );
};
