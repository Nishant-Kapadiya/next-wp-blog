import Container from "./container";
import { CMS_NAME, EXAMPLE_PATH } from "../lib/constants";

export default function Footer() {
  return (
    <footer className="footer footer-center p-2 bg-base-300 text-base-content">
      <Container>
        <div className="py-2 items-center">
          <p className="text-sm lg:text-sm font-bold tracking-tighter leading-tight text-center lg:text-center mb-2">
            Copyright © {new Date().getFullYear()} - All right reserved by{" "}
            {CMS_NAME}.
          </p>
        </div>
      </Container>
    </footer>
  );
}
