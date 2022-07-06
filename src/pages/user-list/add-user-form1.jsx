import React from 'react';
import {
  Button,
  Grid,
} from "@mui/material";
import AppTextField from "components/input-fields/AppTextField";


export default function AddUserForm({values, handleChange, touched, errors}){
    return(
        <Grid container spacing={3}>
                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="fullName"
                    label="Full Name"
                    value={values.fullName}
                    onChange={handleChange}
                    error={Boolean(touched.fullName && errors.fullName)}
                    helperText={touched.fullName && errors.fullName}
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
                    name="phone"
                    label="Phone Number"
                    value={values.phone}
                    onChange={handleChange}
                    error={Boolean(touched.phone && errors.phone)}
                    helperText={touched.phone && errors.phone}
                  />
                </Grid>

                <Grid item sm={6} xs={12}>
                  <AppTextField
                    fullWidth
                    name="country"
                    label="Country"
                    value={values.country}
                    onChange={handleChange}
                    error={Boolean(touched.country && errors.country)}
                    helperText={touched.country && errors.country}
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
              </Grid>
    )
}