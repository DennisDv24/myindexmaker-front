import { Link } from "../../../components/Link/Link"

export const DiamondContainer = () => {
    return (
        <div className="diamond-bg-wrapper">
            <div className='diamond__content'>
                <h1>
                    <Link link='/'>
                        MyIndex Maker
                    </Link>
                </h1>
                <p>
                    MyIndex Maker is a community driven
                    Remilia derivatives gallery. The list,
                    featured collections and scores are determined
                    by TheIndex DAO, so Milady has full control
                    over the lists.
                </p>
            </div>
        </div>
    )
}
