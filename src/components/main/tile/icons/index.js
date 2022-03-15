import { ReactComponent as StarSVG } from './star.svg'
import { ReactComponent as BackDiamondSVG } from './backside/diamond.svg'
import { ReactComponent as BackFlowerSVG } from './backside/flower.svg'
import { ReactComponent as BackIcosSVG } from './backside/icos.svg'
import { ReactComponent as BackPrettySVG } from './backside/pretty.svg'
import { ReactComponent as BackSimpleSVG } from './backside/simple.svg'
import { ReactComponent as PlaySVG } from './play.svg'
import { ReactComponent as DetailSVG } from './rays.svg'
import { ReactComponent as NotEqualSVG } from './notequal.svg'
import { ReactComponent as EqualSVG } from './equal.svg'

function Icon({ type, data }) {



    let classes = ``

    switch (data.desc) {
        case 'small':
            classes = `h-5 w-5 ${type} m-2 `
            break;
        case 'large':
            classes = `absolute ${type} h-full w-full animate-swivel md:pb-1`
            break;
        case 'background':
            classes = `${type} w-full h-full`
            break;
        case 'play':
            classes = `${type} h-full w-full pointer-events-none`
            break;
        case 'detail':
            classes = `absolute h-full w-full animate-clockwise opacity-10 text-neutral-700 grid content-center justify-center pointer-events-none`
            break;
        case 'score':
            classes = `h-10 w-10 md:h-16 md:w-16 lg:w-10 lg:h-10 ${type}`
            break;
        case 'notequal':
            classes = `h-10 w-10 md:h-16 md:w-16 lg:w-10 lg:h-10 ${type}`
            break;
        case 'equal':
            classes = `h-10 w-10 md:h-16 md:w-16 lg:w-10 lg:h-10 ${type}`
            break;

        default:
            break;
    }

    const library = {
        small: <StarSVG className={classes} />,
        large: <StarSVG className={classes} />,
        background: <BackSimpleSVG className={classes} />,
        play: <PlaySVG className={classes} />,
        detail: <DetailSVG className={classes} />,
        score: <StarSVG className={classes} />,
        notequal: <NotEqualSVG className={classes} />,
        equal: <EqualSVG className={classes} />
    }
    return library[data.desc]
}

export default Icon