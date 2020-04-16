<TableContainer component={Paper}>
  <Table>
    <TableHead>
      <TableRow>
        <TableCell width="10%">Pos.</TableCell>
        <TableCell width="50%">Name</TableCell>
        <TableCell width="30%" align="right">
          Score
        </TableCell>
        <TableCell width="5%" align="center" padding="none">
          <Box mt={1}>
            <Icon>
              <RemoveCircle />
            </Icon>
          </Box>
        </TableCell>
        <TableCell width="5%" align="center" padding="none">
          <Box mt={1}>
            <Icon>
              <AddCircle />
            </Icon>
          </Box>
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {typeof compState.players === "object"
        ? compState.players.map((i, ind) => {
            return (
              <TableRow>
                <TableCell>{getPosition(ind)}</TableCell>
                <TableCell>{i.name}</TableCell>
                <TableCell align="right">{i.score}</TableCell>
                <TableCell align="center" padding="none">
                  <IconButton>
                    <RemoveCircle />
                  </IconButton>
                </TableCell>
                <TableCell align="center" padding="none">
                  <IconButton>
                    <AddCircle />
                  </IconButton>
                </TableCell>
              </TableRow>
            );
          })
        : null}
    </TableBody>
  </Table>
</TableContainer>;
