import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../../app/hooks";
import { addPackage } from "../../../../../features/package/packageSlice";
import {
  Row,
  Col,
  CardBody,
  FormGroup,
  Form,
  Label,
  Container,
} from "reactstrap";
import { useForm, Controller, SubmitHandler } from "react-hook-form";
import * as types from "../../../../../utility/types";
import Select from "react-select";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import {
  Box,
  Button,
  Chip,
  Divider,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Theme,
  TextField,
  InputAdornment,
  Input,
  Switch,
  Autocomplete,
  Stack,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { TextFields } from "@mui/icons-material";
import { DatePicker, DateTimePicker } from "@mui/x-date-pickers";
import moment from "moment";
import { isNullishCoalesce } from "typescript";

const Register = () => {
  interface InputForm {
    way: { label: string; value: string };
    senderName: string;
    senderId: number;
    senderAddress: string;
    senderPhone1: string;
    senderPhone2: string;
    senderCity: string;
    senderState: string;
    senderZipCode: string;
    recipientName: string;
    recipientId: number;
    recipientCity: string;
    recipientState: string;
    recipientAddress: string;
    recipientPhone1: string;
    recipientPhone2: string;
    recipientZipCode: string;
    description: string;
    currency: { label: string; value: string };
    payment: number;
    insurance: boolean;
    packageValue: number;
    receivedDate: Date;
    weight: number;
    subsidiary: { label: string; year: number };
  }
  const { control, handleSubmit, register } = useForm<InputForm>();
  const onSubmit: SubmitHandler<InputForm> = (data) => console.log(data);
  const [dateTime, setDateTime] = useState<Date | null>(new Date());
  const onChangeDate = (newValue: Date | null) => {
    console.log("inside onChange =>", newValue);
    console.log(typeof newValue);
    setDateTime(newValue);
    console.log("after change =>", dateTime);
  };

  return (
    <Box>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Stack
          direction="column"
          spacing={{ xs: 1, sm: 2, md: 2 }}
          divider={<Divider orientation="horizontal" flexItem />}
        >
          <Box>
            <Grid
              container
              spacing={2}
              direction="row"
              justifyContent="space-between"
              alignItems="flex-end"
            >
              <Grid item xs={6}>
                <FormControl fullWidth>
                  <Label>Servicio Utilizado</Label>
                  <Controller
                    name="way"
                    control={control}
                    render={({ field }) => (
                      <Select
                        {...field}
                        options={[
                          { value: "GtUsa", label: "Guatemala - USA" },
                          { value: "UsaGt", label: "USA - Guatemala" },
                        ]}
                      />
                    )}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={6}>
                <Box
                  sx={{
                    p: 1,
                    border: 1,
                    borderColor: (theme: Theme) => theme.palette.primary.main,
                  }}
                >
                  Envio "C" No. 82369
                </Box>
              </Grid>
            </Grid>
          </Box>
          {/* **************************************************************************/}
          <Box>
            <Stack
              direction={{ xs: "column", sm: "row" }}
              spacing={{ xs: 4, sm: 4, md: 4 }}
              alignItems="center"
              divider={<Divider orientation="vertical" flexItem />}
            >
              {/* ******************************* SENDER ***********************************/}

              <Box
                sx={{
                  border: 1,
                  p: 2,
                  borderColor: "grey.500",
                  borderRadius: "16px",
                }}
              >
                <Label>¿Quién Envía?</Label>
                <Grid container spacing={2}>
                  <Grid
                    item
                    container
                    spacing={4}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={6}>
                      <Controller
                        name="senderName"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Nombre"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controller
                        name="senderId"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="DPI"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="senderAddress"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          sx={{ width: 1 }}
                          label="Casa, Apartamento, Calle, Avenida"
                          variant="standard"
                          {...field}
                        />
                      )}
                    />
                  </Grid>

                  <Grid
                    item
                    container
                    spacing={4}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={4}>
                      <Controller
                        name="senderCity"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Ciudad/Municipio"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="senderState"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Estado/Departamento"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="senderZipCode"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Código Postal"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    spacing={4}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={6}>
                      <Controller
                        name="senderPhone1"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Tel 1"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controller
                        name="senderPhone2"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Tel 2"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Box>

              {/* ****************************** RECIPIENT ********************************************/}

              <Box
                sx={{
                  border: 1,
                  p: 2,
                  borderColor: "grey.500",
                  borderRadius: "16px",
                }}
              >
                <Label>¿Quién Recibe?</Label>
                <Grid container spacing={2}>
                  <Grid
                    item
                    container
                    spacing={4}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={6}>
                      <Controller
                        name="recipientName"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Nombre"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controller
                        name="recipientId"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="DPI"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid item xs={12}>
                    <Controller
                      name="recipientAddress"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          sx={{ width: 1 }}
                          label="Casa, Apartamento, Calle, Avenida"
                          variant="standard"
                          {...field}
                        />
                      )}
                    />
                  </Grid>

                  <Grid
                    item
                    container
                    spacing={4}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={4}>
                      <Controller
                        name="recipientCity"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Ciudad/Municipio"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="recipientState"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Estado/Departamento"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Controller
                        name="recipientZipCode"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Código Postal"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>

                  <Grid
                    item
                    container
                    spacing={4}
                    columns={{ xs: 4, sm: 8, md: 12 }}
                  >
                    <Grid item xs={6}>
                      <Controller
                        name="recipientPhone1"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Tel 1"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Controller
                        name="recipientPhone2"
                        control={control}
                        render={({ field }) => (
                          <TextField
                            sx={{ width: 1 }}
                            label="Tel 2"
                            variant="standard"
                            {...field}
                          />
                        )}
                      />
                    </Grid>
                  </Grid>
                </Grid>
              </Box>
            </Stack>
          </Box>
          <Box>
            <Grid
              container
              spacing={2}
              rowSpacing={1}
              direction={{ xs: "column", md: "row" }}
              justifyContent="space-between"
              alignItems="flex-end"
            >
              {/* ************************************* DESCRIPTION **********************************/}

              <Grid item xs={6}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      label="Descripcion"
                      multiline
                      rows={4}
                      margin="normal"
                      fullWidth
                    />
                  )}
                />
              </Grid>

              <Grid item container xs={6}>
                {/* ***************************** FECHA, PESO, SUCURSAL ***************************************/}
                <Grid container item spacing={2}>
                  <Grid item xs={3}>
                    <Controller
                      name="receivedDate"
                      defaultValue={new Date()}
                      control={control}
                      render={({ field: { onChange, ...restField } }) => (
                        <LocalizationProvider dateAdapter={AdapterDateFns}>
                          <DatePicker
                            label="Fecha Recepción"
                            onChange={(event) => {
                              onChange(event);
                              setDateTime(event);
                            }}
                            renderInput={(params) => <TextField {...params} />}
                            {...restField}
                          />
                        </LocalizationProvider>
                      )}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <Controller
                      name="weight"
                      control={control}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Peso"
                          id="standard-start-adornment"
                          sx={{ m: 1, width: "75%" }}
                          InputProps={{
                            startAdornment: (
                              <InputAdornment position="start">
                                lb
                              </InputAdornment>
                            ),
                          }}
                          variant="standard"
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Controller
                      name="subsidiary"
                      control={control}
                      //defaultValue={{ label: null, year: null }}
                      render={({ field: { onChange, value } }) => (
                        <Autocomplete
                          sx={{ width: 1 }}
                          options={[
                            { label: "San Jose Pinula", year: 1994 },
                            { label: "Fraijanes", year: 1972 },
                            { label: "San Marcos", year: 1974 },
                            { label: "Huehuetenango", year: 2008 },
                          ]}
                          //value={null}
                          renderInput={(params) => (
                            <TextField
                              {...params}
                              label="Sucursal"
                              //onChange={onChange}
                              //value={value}
                            />
                          )}
                          onChange={(
                            event: any,
                            newValue: { label: string; year: number } | null
                          ) => onChange(newValue)}
                        />
                      )}
                    />
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-end"
                >
                  <Grid item xs={3}>
                    <Label>Moneda</Label>
                    <Controller
                      name="currency"
                      control={control}
                      defaultValue={{ value: "GTQ", label: "GTQ" }}
                      render={({ field }) => (
                        <Select
                          {...field}
                          options={[
                            { value: "GTQ", label: "GTQ" },
                            { value: "USD", label: "USD" },
                          ]}
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <InputLabel htmlFor="amount">Total a Pagar</InputLabel>
                    <Controller
                      name="payment"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          sx={{ width: "75%" }}
                          id="amount"
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                        />
                      )}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <InputLabel htmlFor="amount"> Paga Seguro</InputLabel>
                    <Controller
                      name="insurance"
                      control={control}
                      render={({ field }) => (
                        <Switch {...field} color="warning" />
                      )}
                    />
                  </Grid>
                  <Grid item xs={3}>
                    <InputLabel htmlFor="packageValue">Valorado En</InputLabel>
                    <Controller
                      name="packageValue"
                      control={control}
                      render={({ field }) => (
                        <Input
                          {...field}
                          id="packageValue"
                          startAdornment={
                            <InputAdornment position="start">$</InputAdornment>
                          }
                        />
                      )}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Box>
          {/* ***************************** BOTON ENVIAR ***************************************/}
          <Box>
            <Button
              variant="contained"
              endIcon={<SendIcon />}
              fullWidth
              type="submit"
            >
              Enviar
            </Button>
          </Box>
        </Stack>
      </Form>
    </Box>
  );
};

export default Register;
