import React from 'react'
import { Collections } from '../Collections'
import { MarketPlace } from '../MarketPlace'
import { TrendingCreators } from '../TrendingCreators'
import { Container } from './styles'

export const BrowseContent = (props) => {
  const {
    filterValues,
    handleChangeFilter,
    getFilterName,
    isCreator,
    isCollection
  } = props
   
  return (
    <Container>
      {/* {filterValues && Object.keys(filterValues).every(key => !filterValues[key]) && !isCollection && (
        isCreator
          ? <Collections />
          : <TrendingCreators />
      )} */}
      <MarketPlace
        filterValues={filterValues}
        handleChangeFilter={handleChangeFilter}
        getFilterName={getFilterName}
        isCreator={isCreator}
        isCollection={isCollection}
      />
    </Container>
  )
}
