import { Container } from 'react-bootstrap'
import { CenterBanner } from './modules/viewComponent/CenterBanner'
import { LeftContainer } from './modules/viewComponent/leftContainer'
import { RightContainer } from './modules/viewComponent/rightContainer'

export const CatalogueView = ({
  options,
  setOptions,
  finalList,
  handleChangeMulti,
  handleChange,
  handleCategoryChange,
  actualSubcategories,
  clearCategory,
  clearSearch
}) => {
  return (
    <div>
      <CenterBanner />
      <Container className='d-flex justify-content-around flex-wrap'>
        <LeftContainer
          options={options}
          handleCategoryChange={handleCategoryChange}
          handleChange={handleChange}
          handleChangeMulti={handleChangeMulti}
          actualSubcategories={actualSubcategories}
        />
        <RightContainer
          options={options}
          finalList={finalList}
          setOptions={setOptions}
          clearCategory={clearCategory}
          clearSearch={clearSearch}
        />
      </Container>
    </div>
  )
}
