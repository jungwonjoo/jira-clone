import { cn } from '@/lib/utils';

interface DottedSeparatortProps{
    className?:string;
    color?:string;
    height?:string;
    dotSize?:string;
    gapSize?:string;
    direction?:"horizontal" | "vertical";
}

const DottedSeparatort = ({
    className,
    color = "#d4d4d8",
    height = "2px",
    dotSize= "2px",
    gapSize= "6px",
    direction = "horizontal"
}:DottedSeparatortProps) => {
    const isHorizontal = direction === "horizontal"
    return ( 
        <div className={cn(
            isHorizontal ? "wfull flex items-center" : "h-full flex flex-col items-center",
            className,
        )}>
            <div
                className={isHorizontal ? "flex-grow" : "flex-grow-0"}
                style={{
                    width: isHorizontal ? "100%" : height,
                    height: isHorizontal ? height : "100%",
                    backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
                    backgroundSize: isHorizontal 
                        ? `${parseInt(dotSize) + parseInt(gapSize)}px ${height}`
                        : `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
                    backgroundRepeat: isHorizontal ? "react-x" : "react-y",
                    backgroundPosition: "center"  
                }}
            >

            </div>
        </div>
     );
}
 
export default DottedSeparatort;