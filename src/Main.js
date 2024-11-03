import React, {useState} from "react";
import main from "./style/Main.module.css";
import Menu from "./components/UI/select/menu";
import Catalogue from "./components/UI/select/catalogue";
import Computers_and_laptops from "./components/UI/select/computers_and_laptops";
import Tablet from "./components/UI/select/tablet";
import Smartphone from "./components/UI/select/smartphone";
import Accessories from "./components/UI/select/accessories";


const Main = function (){

    const [selectedType, setSelectedType] = useState('computers_and_laptops');

    const [isCatalogueActive, setIsCatalogueActive] = useState(true);

    const toggleCatalogueActive = function() {
        setIsCatalogueActive(!isCatalogueActive);
    };

    const renderSelectedComponent = () => {
        switch (selectedType) {
            case 'computers_and_laptops':
                return <Computers_and_laptops/>;
            case 'tablet':
                return <Tablet />;
            case 'smartphone':
                return <Smartphone />;
            case 'accessories':
                return <Accessories />;
            default:
                return null;
        }
    };

    return (
        <div className={main.Main}>
            <Menu toggleCatalogueActive={toggleCatalogueActive} isActive = {isCatalogueActive} active = {true} isUserActive = {false}/>
            <div className={main.Body}>
                {isCatalogueActive && <Catalogue setSelectedType={setSelectedType} />}
                <main className={isCatalogueActive ? main.Showcase : main.ShowcaseActive}>
                    {renderSelectedComponent()}
                </main>
            </div>
        </div>
    );
}

export default Main;