import deal_img from "../image/dealbook.png";

function DealSection() {
    return (
        <section className="deal">
            <div class="content">
                <h1>
                    "Books and doors are the same thing. You open them, and you
                    go through into another world."
                </h1>
                <br />
                <span>– Jeanette Winterson</span>
            </div>

            <div className="image">
                <img src={deal_img} alt="" />
            </div>
        </section>
    );
}

export default DealSection;
