import { Helmet } from 'react-helmet';

const MetaDescription = () => {
  return (
    <Helmet>
        <title>Tetrawrite</title>
        <meta name='description' content='Tetrawrite current page' />
    </Helmet>
  )
}

export default MetaDescription