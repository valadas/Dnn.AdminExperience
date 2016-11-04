import React, {Component, PropTypes} from "react";
import styles from "./style.less";
import localization from "../../localization";
import utils from "../../utils";
import RadioButtons from "dnn-radio-buttons";

class PageTypeSelector extends Component {
    render() {
        const {page, onChangePageType} = this.props;
        const createdDate = utils.formatDateNoTime(page.createdOnDate) + " " + localization.get("by") + " " + (page.created ? page.created : localization.get("System"));
        const hierarchy = page.hierarchy === "" ? localization.get("Top page") : page.hierarchy;

        return (
            <div className={styles.pageTypeSelector}>
                <div className="page-info-row page-name">
                    {page.name}
                </div>
                <div className="page-info-row">
                    <div className="page-info-item">
                        <div className="page-info-item-label">
                            {localization.get("Created") + ": "}
                        </div>
                        <div className="page-info-item-value">
                            {createdDate}
                        </div>
                    </div>
                    <div className="page-info-item">
                        <div className="page-info-item-label">
                            {localization.get("Page Parent") + ": "}
                        </div>
                        <div className="page-info-item-value">
                            {hierarchy}
                        </div>
                    </div>
                    <div className="page-info-item">
                        <div className="page-info-item-label">
                            {localization.get("Status") + ": "}
                        </div>
                        <div className="page-info-item-value">
                            {page.status}
                        </div>
                    </div>
                </div>
                <div className="page-info-row page-type">
                    <div className="page-info-item">
                        <div className="page-info-item-label">
                            {localization.get("PageType") + ": "}
                        </div>
                        <div className="page-info-item-value">
                            <RadioButtons 
                                options={[{value: "normal", label: localization.get("Standard")}, 
                                          {value: "tab", label: localization.get("Existing")},
                                          {value: "url", label: localization.get("URL")},
                                          {value: "file", label: localization.get("File")}]} 
                                onChange={onChangePageType}
                                value={page.pageType}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

PageTypeSelector.propTypes = {
    page: PropTypes.object.isRequired,
    onChangePageType: PropTypes.func.isRequired
};

export default PageTypeSelector;