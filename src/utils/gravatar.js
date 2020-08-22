import md5 from "md5";

const gravatar = (emal) => {
    const base = "https://gravatar.com/avatar/";
    const formatterEmail = (emal).trim().toLowerCase();
    const hash = md5(formatterEmail, { encoding: "binary" });

    return `${base}${hash}`;
};

export default gravatar;