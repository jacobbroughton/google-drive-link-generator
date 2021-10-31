import styles from "../../../styles/LinkList.module.css";

const LinkList = ({ generatedLinks, lastFormatTime }) => {
    return (
        <div className={styles.generatedContent}>
            { generatedLinks?.length > 0 && (
                <>
                    <p><strong>{generatedLinks.length}</strong>&nbsp; Links Formatted</p>
                    <span className={styles.lastFormatSpan}>Last format: &nbsp;{lastFormatTime}</span>
                </>

            )}

            <span className={styles.list}>
                {generatedLinks?.map((generatedLink) =>
                    <div className={styles.formattedLinkItem}>
                        <img src={generatedLink} className={styles.formattedLinkImage} alt="Formatted Link Image" />
                        <p className={styles.generatedLink} >{generatedLink}</p>
                    </div>
                )}
            </span>
        </div>
    )
}

export default LinkList;