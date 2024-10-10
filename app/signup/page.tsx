"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";

import styles from "./page.module.css";

type Inputs = {
  email: string;
  password: string;
};

export default function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  const formValues = watch();

  return (
    <div className={styles.grid}>
      <div className={styles.loginWrapper}>
        <div className={styles.form}>
          <h2 className={styles.sigup}>Signup form</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={styles.formWrapper}
          >
            <div className={styles.inputWrapper}>
              {formValues.email && (
                <label className={styles.label}>Email</label>
              )}
              <input
                className={styles.input}
                placeholder="Email"
                type="email"
                autoComplete="email"
                {...register("email", {
                  required: "*Email Address is required",
                })}
              />
              {errors.email && (
                <span className={styles.error}> {errors.email.message}</span>
              )}
            </div>
            <div className={styles.inputWrapper}>
              {formValues.password && (
                <label className={styles.label}>Password</label>
              )}
              <input
                className={styles.input}
                placeholder="Password"
                type="password"
                autoComplete="current-password"
                {...register("password", {
                  required: "*This field is required",
                  minLength: {
                    value: 2,
                    message: "Too Many Characters",
                  },
                })}
              />
              {errors.password && (
                <span className={styles.error}>{errors.password.message}</span>
              )}
            </div>
            <input
              className={`${styles.submit} ${
                !formValues.email || !formValues.password ? styles.disabled : ""
              }`}
              disabled={!formValues.email || !formValues.password}
              type="submit"
            />
          </form>
        </div>
      </div>
      <div className={styles.image}>
        <Image
          priority={true}
          src={
            "https://gsmproject.com/image/1/981/0/uploads/projects/images/ajax_bysidleearchitecture_credits_ewout_huibers_hr_31-1464361704.jpg"
          }
          alt={"image"}
          fill={true}
        />
      </div>
    </div>
  );
}
