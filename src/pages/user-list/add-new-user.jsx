import { PhotoCamera } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Grid,
  IconButton,
  styled,
  Switch,
} from "@mui/material";
import AppTextField from "components/input-fields/AppTextField";
import { Small, Tiny } from "components/Typography";
import { useFormik } from "formik";
import * as Yup from "yup"; // styled components

const ButtonWrapper = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  display: "flex",
  borderRadius: "50%",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: theme.palette.action.disabledBackground,
}));
const UploadButton = styled(Box)(({ theme }) => ({
  width: 50,
  height: 50,
  display: "flex",
  borderRadius: "50%",
  border: "2px solid",
  alignItems: "center",
  justifyContent: "center",
  borderColor: theme.palette.background.paper,
  backgroundColor: theme.palette.action.disabledBackground,
}));
const SwitchWrapper = styled(Box)(() => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  marginTop: 10,
}));

const AddNewUser = () => {
  const initialValues = {
    Nome: "",
    email: "",
    Fone: "",
    Nacionalidade: "",
    state: "",
    city: "",
    address: "",
    zip: "",
    about: "",
  };
  const validationSchema = Yup.object().shape({
    Nome: Yup.string().required("Name is Required!"),
    email: Yup.string().email().required("Email is Required!"),
    Fone: Yup.number().min(8).required("Fone is Required!"),
    Nacionalidade: Yup.string().required("Nacionalidade is Required!"),
    state: Yup.string().required("State is Required!"),
    city: Yup.string().required("City is Required!"),
    address: Yup.string().required("Address is Required!"),
    zip: Yup.string().required("Zip is Required!"),
    about: Yup.string().required("About is Required!"),
  });
  const { values, errors, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {},
  });
  return (
    <Box pt={2} pb={4}>
      <Grid container spacing={3}>
        <Grid item md={8} xs={12}>
          <Card
            sx={{
              padding: 3,
            }}
          >
            <form onSubmit={handleSubmit}>
              <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="Nome"
                    label="Nome"
                    value={values.Nome}
                    onChange={handleChange}
                    error={Boolean(touched.Nome && errors.Nome)}
                    helperText={touched.Nome && errors.Nome}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="email"
                    label="Email Address"
                    value={values.email}
                    onChange={handleChange}
                    error={Boolean(touched.email && errors.email)}
                    helperText={touched.email && errors.email}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="Fone"
                    label="Fone"
                    value={values.Fone}
                    onChange={handleChange}
                    error={Boolean(touched.Fone && errors.Fone)}
                    helperText={touched.Fone && errors.Fone}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="Nacionalidade"
                    label="Nacionalidade"
                    value={values.Nacionalidade}
                    onChange={handleChange}
                    error={Boolean(touched.Nacionalidade && errors.Nacionalidade)}
                    helperText={touched.Nacionalidade && errors.Nacionalidade}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="state"
                    label="State/Region"
                    value={values.state}
                    onChange={handleChange}
                    error={Boolean(touched.state && errors.state)}
                    helperText={touched.state && errors.state}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="city"
                    label="City"
                    value={values.city}
                    onChange={handleChange}
                    error={Boolean(touched.city && errors.city)}
                    helperText={touched.city && errors.city}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="address"
                    label="Address"
                    value={values.address}
                    onChange={handleChange}
                    error={Boolean(touched.address && errors.address)}
                    helperText={touched.address && errors.address}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="zip"
                    label="Zip/Code"
                    value={values.zip}
                    onChange={handleChange}
                    error={Boolean(touched.zip && errors.zip)}
                    helperText={touched.zip && errors.zip}
                  />
                </Grid>

                <Grid item xs={12}>
                  <AppTextField
                    multiline
                    fullWidth
                    rows={10}
                    name="about"
                    label="About"
                    value={values.about}
                    onChange={handleChange}
                    error={Boolean(touched.about && errors.about)}
                    helperText={touched.about && errors.about}
                    sx={{
                      "& .MuiOutlinedInput-root textarea": {
                        padding: 0,
                      },
                    }}
                  />
                </Grid>

                <Grid item xs={12}>
                  <Button type="submit" variant="contained">
                    Create User
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AddNewUser;
