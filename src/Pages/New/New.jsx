import { useState } from "react";

import { doc, setDoc } from "firebase/firestore";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { db } from "../../firebase";
import { auth } from "../../firebase";

// Image
import ImgPlaceholder from "../../assets/images/single/img-placeholder.png";

import Navbar from "../../Components/Navbar/Navbar";
import Sidebar from "../../Components/Sidebar/Sidebar";
import styles from "./New.module.scss";

const New = ({ inputs, title }) => {
    const [file, setFile] = useState("");
    const [data, setData] = useState({});

    const handleInputs = (e) => {
        e.preventDefault();
        const id = e.target.id;
        const value = e.target.value;

        return setData({ ...data, [id]: value });
    };

    const handleAdd = async (e) => {
        e.preventDefault();

        try {
            const res = await createUserWithEmailAndPassword(
                auth,
                data.email,
                data.password
            );
            await setDoc(doc(db, "users", res.user.uid), {
                ...data,
            });
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className={styles.new}>
            <Sidebar />
            <div className={styles.newContainer}>
                <Navbar />

                <div className={styles.top}>
                    <h3>{title}</h3>
                </div>

                <div className={styles.bottom}>
                    <form onSubmit={handleAdd}>
                        <div className={styles.left}>
                            <h4>Upload Image:</h4>

                            <label htmlFor="img_file">
                                <img
                                    src={
                                        file
                                            ? URL.createObjectURL(file)
                                            : ImgPlaceholder
                                    }
                                    alt=""
                                />
                            </label>
                            <input
                                type="file"
                                id="img_file"
                                onChange={(e) => setFile(e.target.files[0])}
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
                                            onChange={handleInputs}
                                        />
                                    </div>
                                ))}
                            </div>

                            <button type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default New;
