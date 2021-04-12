import { useTranslation } from 'react-i18next';
const Translate = ({ id }) => {
    const { t } = useTranslation();
    return <div dangerouslySetInnerHTML={{ __html: t(id) }}></div>
}

export default Translate;