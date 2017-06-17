import React from 'react'

const styles = {
  container: {
    flexGrow: 1
  }
}

const PageOneA = () => {
  return (
    <div style={styles.container}>
      <div className='column-container'>
        <h3>Page A</h3>
      </div>
    </div>
  )
}

export default PageOneA
