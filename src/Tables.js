import { Table } from 'antd'

function Tables({ data }) {
  // taking keys from an each object and store
  var colKeys = []
  data.map((each) => {
    var cols = Object.keys(each)
    colKeys.push(...cols)
    return each
  });

  // making unique set of keys from column keys array
  var uniqueKeys = new Set(colKeys);

  // creating columns of a table from unique keys
  var allCols = []

  uniqueKeys.forEach((each) => {
    allCols.push({
      title: each.toUpperCase(),
      key: each,
      dataIndex: each
    })
  });

  return (<>
    <Table dataSource={data} columns={allCols} />
  </>);
}

export default Tables;