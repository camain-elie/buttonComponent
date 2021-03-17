import Button from './Button'

const ButtonDisplayer = () => {
    return (
        <div className="buttonDisplayer">
            <h1 className="buttonDisplayer__title">Buttons</h1>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button />"}</p>
                    <Button />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription--properties">{"&:hover, &:focus"}</p>
                    <Button focus />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button variant=\"outline\" />"}</p>
                    <Button variant="outline" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription--properties">{"&:hover, &:focus"}</p>
                    <Button variant="outline" focus />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button variant=\"text\" />"}</p>
                    <Button variant="text" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription--properties">{"&:hover, &:focus"}</p>
                    <Button variant="text" focus />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button disableShadow />"}</p>
                    <Button disableShadow />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button disabled />"}</p>
                    <Button disabled text="Disabled"/>
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button variant=\"text\" disabled />"}</p>
                    <Button variant="text" disabled text="Disabled" />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button startIcon=\"local_grocery_store\" />"}</p>
                    <Button startIcon="local_grocery_store" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button endIcon=\"remove_shopping_cart\" />"}</p>
                    <Button endIcon="remove_shopping_cart" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button endIcon=\"translate\" />"}</p>
                    <Button endIcon="translate" />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button size=\"sm\" />"}</p>
                    <Button size="sm" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button size=\"md\" />"}</p>
                    <Button size="md" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button size=\"lg\" />"}</p>
                    <Button size="lg" />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"#f4b7b7\" />"}</p>
                    <Button color="#f4b7b7" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"rgb(150 ,220, 75)\" />"}</p>
                    <Button color="rgb(150,220,75)" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"orange\" />"}</p>
                    <Button color="orange" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"unvalid css color\" />"}</p>
                    <Button color="unvalid css color" />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"default\" />"}</p>
                    <Button color="default" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"primary\" />"}</p>
                    <Button color="primary" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"secondary\" />"}</p>
                    <Button color="secondary" text="Secondary" />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"<Button color=\"danger\" />"}</p>
                    <Button color="danger" text="Danger" />
                </div>
            </div>

            <div className="buttonDisplayer__variant">
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"&:hover, &:focus"}</p>
                    <Button color="default" focus />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"  "}</p>
                    <Button color="primary" focus />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"  "}</p>
                    <Button color="secondary" text="Secondary" focus />
                </div>
                <div className="buttonDisplayer__display">
                    <p className="buttonDisplayer__buttonDescription">{"  "}</p>
                    <Button color="danger" text="Danger" focus />
                </div>
            </div>

        </div>
    )
}

export default ButtonDisplayer