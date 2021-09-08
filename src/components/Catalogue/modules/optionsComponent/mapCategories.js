import { checkGoto } from '../../CatalogueStyle'

export const MapCategories = ({ allCategories, options, handleCategoryChange }) => {
  return (
    <>
      {allCategories.map((category, i) => {
        if (category !== options.category) {
          return (
            <div key={i} style={checkGoto} onClick={() => handleCategoryChange(category)}>
              {category}
            </div>
          )
        } else return null
      })}
    </>
  )
}
