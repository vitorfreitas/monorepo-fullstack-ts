import React from 'react'
import styled from 'styled-components'

const TableHead = styled.th`
  font-weight: 300;
  color: #ccc;
  font-size: 1.2rem;
  padding: 5px 2rem;
  text-align: left;
`

const TableCell = styled.td`
  padding: 5px 2rem;
  font-size: 2rem;
`

interface Props {
  fields: string[]
  labels: { [key: string]: string }
  dataSource: { [key: string]: any }[]
}

const InfoTable: React.FC<Props> = ({ fields, labels, dataSource }) => {
  return (
    <table>
      <tr>
        {fields.map(field => (
          <TableHead>{labels[field]}</TableHead>
        ))}
      </tr>

      {dataSource.map(data => (
        <tr>
          {fields.map(field => (
            <TableCell>{data[field]}</TableCell>
          ))}
        </tr>
      ))}
    </table>
  )
}

export default InfoTable
