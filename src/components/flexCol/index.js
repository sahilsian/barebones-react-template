import { HoverImageText } from "../hoverImageText/hoverImageText";
import ImageText from "../imageText"
const FlexCol = ({ arr, pagination = [0, 3], variant = "default", hasDescription, noText, flexWrap }) => {
  return (
    <div className={`flex flex-wrap gap-4 justify-center items-center`}>


      {arr.slice(pagination[0], pagination[1]).map((item) => {
        switch (variant) {
          case "hover":
            //  goes into the hover effect image based display
            return (
              <div  key={item.name} className="flex-1">
                <HoverImageText  source={item.image} title={item.name} description={item.description} alt={item.alt} />
              </div>
            );
          default:
            return (
              <div key={item.title} className="flex-1">
               <ImageText  noText={noText} hasDescription={hasDescription} source={item.source} title={item.title} description={item.description} alt={item.alt} shadow></ImageText>
              </div>
            );
        }
      })}
    </div>
  );
};

export default FlexCol;
