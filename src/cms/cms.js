import CMS from 'netlify-cms-app'
import 'prismjs/themes/prism.css'
import ProjectPreview from './templates/ProjectPreview'

CMS.registerPreviewTemplate('blog', ProjectPreview)
