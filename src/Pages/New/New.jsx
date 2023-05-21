import { useState } from "react";

// Image
import ImgPlaceholder from "../../assets/images/single/img-placeholder.png";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./New.module.scss";

const New = ({ inputs, title }) => {
    const [image, setImage] = useState("");

    return (
        <div className={styles.new}>
            <Sidebar />
            <div className={styles.newContainer}>
                <Navbar />

                <div className={styles.top}>
                    <h3>{title}</h3>
                </div>

                <div className={styles.bottom}>
                    <form>
                        <div className={styles.left}>
                            <h4>Upload Image:</h4>

                            <label htmlFor="img_file">
                                <img
                                    src={
                                        image
                                            ? URL.createObjectURL(image)
                                            : ImgPlaceholder
                                    }
                                    alt=""
                                />
                            </label>
                            <input
                                type="file"
                                id="img_file"
                                onChange={(e) => setImage(e.target.files[0])}
                                style={{ display: "none" }}
                            />
                        </div>

                        <div className={styles.right}>
                            <div className={styles.wrapper}>
                                {inputs.map((input) => (
                                    <div
                                        className={styles.formInput}
                                        key={input.id}>
                                        <label htmlFor={input.id}>
                                            {input.label}
                                        </label>
                                        <input
                                            type={input.type}
                                            id={input.id}
                                            placeholder={input.placeholder}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button>Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default New;
