import CMS from 'netlify-cms'
import 'prismjs/themes/prism.css'
import ProjectPreview from './templates/ProjectPreview'

CMS.registerPreviewTemplate('blog', ProjectPreview)
