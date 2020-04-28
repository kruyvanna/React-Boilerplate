import React from 'react'
import { useQuery, gql } from '@apollo/client'

const PRODUCTS = gql`
  {
    product {
      id
      name
    }
  }
`

export const ProductListGraphed = () => {
  const { loading, error, data } = useQuery(PRODUCTS)
  if (loading) {
    return <div>Loading...</div>
  }
  if (error) {
    return <div>Error :(</div>
  }
  return data.product.map((product) => {
    return (
      <div key={product.id}>
        {' '}
        <div>{product.name}</div>
      </div>
    )
  })
}
