import React, { useState } from "react";
import styles from "./DropDownMenu.module.css";

export default function DropDownMenu() {
    const [isShowMenu, setShowMenu] = useState(false);
    const [selectedItem, setSelectedItem ] = useState(null);

    const dropDownList = [
        "Electronics", "Men's Clothing", "Women's Clothing", "Fresh Seasonal Fruits",
        "Sports Cars", "Arts & Entertainment", "Arts & Entertainment", "Arts & Entertainment"];


    // ===== toggle menu ========//
    function toggleMenu() {
        setShowMenu((prev) => !prev);
    }

    //===== set selected items =====//
    function handleChangeSelectedItems(idx){

        const itemsThatSelected = dropDownList[idx];
        setSelectedItem(itemsThatSelected );
        toggleMenu();

        // console.log("selectedItems: ", selectedItem);
        
    }

    return (
        <>
        <h2 className={styles.heading}>Drop Down Menu</h2>
        <div className={styles.dropDownHeader}>
            

            {/* ======== header selected div ================= */}
            <div className={styles.selectedDiv}>
                <p>{selectedItem?selectedItem:"Select your favourite"}</p>
                <i
                    onClick={() => toggleMenu()}
                    className={`fa fa-chevron-${isShowMenu ? "down" : "up"} ${!isShowMenu ? styles.hiddenMenuIcon : styles.showMenuIcon}`}
                ></i>
            </div>

        {/* ================ render menu here =================== */}
            <div className={`${styles.menu} ${isShowMenu ? styles.show : ""}`}>
                {dropDownList.map((item, idx)=>(
                      <div key={idx} onClick={()=>handleChangeSelectedItems(idx)} className={styles.dropDownItem}>{item}</div>
                ))}

            </div>

           
            
        </div>

    </>
    );
}
